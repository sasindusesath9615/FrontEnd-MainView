import React from 'react'

function ImageUpload() {
    return (
      <>
        <div className="row py-2">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Upload Shop's Image :
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile1"
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Business Registration (jpg/PDF)
              </label>
              <input
                className="form-control "
                type="file"
                id="formFile2"
              ></input>
            </div>
          </div>
        </div>
      </>
    );
}

export default ImageUpload
