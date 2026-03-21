"""
Test suite for Careers Registration API with CV file upload
Tests: /api/careers/register endpoint with multipart form data
"""
import pytest
import requests
import os
import io

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestCareersRegistration:
    """Career registration endpoint tests with file upload"""
    
    def test_register_without_cv_success(self):
        """Test career registration without CV file - should succeed"""
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data={
                "name": "TEST_John Doe",
                "email": "test_john@example.com",
                "areaOfInterest": "solutions"
            }
        )
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data["status"] == "success"
        assert "message" in data
        assert data["cvUploaded"] == False
        print(f"✓ Registration without CV successful: {data['message']}")
    
    def test_register_with_pdf_cv_success(self):
        """Test career registration with PDF CV file - should succeed"""
        # Create a mock PDF file (minimal valid PDF)
        pdf_content = b"%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n>>\nendobj\ntrailer\n<<\n/Root 1 0 R\n>>\n%%EOF"
        
        files = {
            'cvFile': ('test_resume.pdf', io.BytesIO(pdf_content), 'application/pdf')
        }
        data = {
            "name": "TEST_Jane Smith",
            "email": "test_jane@example.com",
            "areaOfInterest": "healthcare-consulting"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data=data,
            files=files
        )
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        result = response.json()
        assert result["status"] == "success"
        assert result["cvUploaded"] == True
        print(f"✓ Registration with PDF CV successful: {result['message']}")
    
    def test_register_with_docx_cv_success(self):
        """Test career registration with DOCX CV file - should succeed"""
        # Create a minimal DOCX-like content (just for testing content type)
        docx_content = b"PK\x03\x04" + b"\x00" * 100  # Minimal ZIP header (DOCX is a ZIP)
        
        files = {
            'cvFile': ('test_resume.docx', io.BytesIO(docx_content), 
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        }
        data = {
            "name": "TEST_Bob Wilson",
            "email": "test_bob@example.com",
            "areaOfInterest": "publishing"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data=data,
            files=files
        )
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        result = response.json()
        assert result["status"] == "success"
        print(f"✓ Registration with DOCX CV successful")
    
    def test_register_missing_name_fails(self):
        """Test registration without name - should fail with 422"""
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data={
                "email": "test@example.com",
                "areaOfInterest": "solutions"
            }
        )
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
        print("✓ Missing name validation works")
    
    def test_register_missing_email_fails(self):
        """Test registration without email - should fail with 422"""
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data={
                "name": "TEST_Missing Email",
                "areaOfInterest": "solutions"
            }
        )
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
        print("✓ Missing email validation works")
    
    def test_register_missing_area_of_interest_fails(self):
        """Test registration without area of interest - should fail with 422"""
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data={
                "name": "TEST_Missing Area",
                "email": "test@example.com"
            }
        )
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
        print("✓ Missing area of interest validation works")
    
    def test_register_invalid_file_type_fails(self):
        """Test registration with invalid file type (e.g., .txt) - should fail with 400"""
        txt_content = b"This is a text file, not a valid CV format"
        
        files = {
            'cvFile': ('test_resume.txt', io.BytesIO(txt_content), 'text/plain')
        }
        data = {
            "name": "TEST_Invalid File",
            "email": "test_invalid@example.com",
            "areaOfInterest": "corporate"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data=data,
            files=files
        )
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}: {response.text}"
        
        result = response.json()
        assert "Invalid file type" in result.get("detail", "")
        print("✓ Invalid file type validation works")
    
    def test_register_file_too_large_fails(self):
        """Test registration with file larger than 5MB - should fail with 400"""
        # Create a file larger than 5MB
        large_content = b"%PDF-1.4\n" + (b"0" * (6 * 1024 * 1024))  # ~6MB
        
        files = {
            'cvFile': ('large_resume.pdf', io.BytesIO(large_content), 'application/pdf')
        }
        data = {
            "name": "TEST_Large File",
            "email": "test_large@example.com",
            "areaOfInterest": "solutions"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/careers/register",
            data=data,
            files=files,
            timeout=60
        )
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}: {response.text}"
        
        result = response.json()
        assert "too large" in result.get("detail", "").lower() or "5MB" in result.get("detail", "")
        print("✓ File size validation works")
    
    def test_all_areas_of_interest(self):
        """Test registration with all valid areas of interest"""
        areas = ['informatics', 'publishing', 'healthcare-consulting', 'corporate', 'solutions']
        
        for area in areas:
            response = requests.post(
                f"{BASE_URL}/api/careers/register",
                data={
                    "name": f"TEST_Area_{area}",
                    "email": f"test_{area}@example.com",
                    "areaOfInterest": area
                }
            )
            
            assert response.status_code == 200, f"Failed for area '{area}': {response.status_code}"
            print(f"✓ Area '{area}' accepted")


class TestHealthCheck:
    """Basic API health check"""
    
    def test_api_root(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print("✓ API root endpoint working")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
