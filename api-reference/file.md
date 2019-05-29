**Get File Contents**
----
Get the contents of a file specified by 'id'. This endpoint is restricted to the owner or a set collaborator of the file.

* **URL**

  /file

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`

   * **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "contents" : "ShowResult 'File Contents'" }`

   * **Error Response:**

     * **Code:** 401 UNAUTHORIZED <br />
       **Content:**<br/>
       `{ "status":"error", "message":"No authentication token was received." }`<br/>
       `{ "status":"error", "message":"No authentication token was received." }`

     OR

     * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:** `{ "status":"error", "message":"Internal database, file system, permission error or invalid file or folder ID." }`

   * **Sample Call:**

   ```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/file",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID"
         },
         success : function(r) {
           console.log(r);
         }
       });
     ```

   * **Notes:**

     _No notes._
