**Create File or Folder**
----
Creates a physical file or folder in the users folder and a database record for that file or folder. 'contents' is optional for files and will be ignored if you are creating a folder.

* **URL**

  /create

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`
   `type=[file|folder]`
   `name=[string]`

   **Optional:**

   `contents=[scpl]`

   * **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"Collaborators were set for file.scpl" }`

   * **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

     * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:** `{ "status":"error", "message":"Internal database, file system, permission error or invalid file or folder ID." }`

   * **Sample Call:**

   ```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/create",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID"
            users: "4356,3478"
         },
         success : function(r) {
           console.log(r);
         }
       });
     ```

   * **Notes:**

     _No notes._
