import { useState } from "react";

const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate if it's actually an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (png, jpg, jpeg).');
        return;
      }

      setSelectedImage(file);
      
      // Create a temporary local URL for the live preview
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please select an image first!');
      return;
    }

    // When uploading files, you must use FormData
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      console.log('Uploading...', selectedImage.name);
      
      // Example API call (replace with your backend URL)
      /*
      const response = await fetch('https://your-api.com/upload', {
        method: 'POST',
        body: formData, // Do NOT set Content-Type header; browser sets it automatically for FormData
      });
      const data = await response.json();
      console.log('Upload successful:', data);
      */
      
      alert('Image uploaded successfully! (Check console for details)');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div style={styles.container}>
      <h2>Upload your Image</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Hidden default input, styled via label */}
        <label htmlFor="file-upload" style={styles.uploadLabel}>
          {selectedImage ? 'Change Image' : 'Select Image'}
        </label>
        <input 
          id="file-upload"
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={styles.hiddenInput}
        />

        {/* Live Preview Section */}
        {previewUrl && (
          <div style={styles.previewContainer}>
            <p>Preview:</p>
            <img src={previewUrl} alt="Preview" style={styles.previewImage} />
          </div>
        )}

        <button type="submit" style={styles.submitButton}>
          Upload to Server
        </button>
      </form>
    </div>
  )
}

// Simple inline styles for demonstration
const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  hiddenInput: {
    display: 'none'
  },
  uploadLabel: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  previewContainer: {
    marginTop: '10px'
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '200px',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default ImageUploadForm
