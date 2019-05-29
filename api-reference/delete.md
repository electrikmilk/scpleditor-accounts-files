**Delete File or Folder**
----
Delete a file or folder specified by 'id'. This endpoint is restricted to the owner of the file or folder.

* **URL**

  /delete

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `type=[file|folder]`<br/>
   `id=[alphanumeric]`

* **Success Response:**

    * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"File file.scpl was deleted." }`

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
         url: "https://account.scpl.dev/api/v1/delete",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            type: "file",
            id: "FILE_ID"
         },
         success : function(r) {
           console.log(r);
         }
       });
     ```

* **Notes:**

     _No notes._
