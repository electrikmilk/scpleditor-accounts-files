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
       **Content:**<br />
       `{ "status":"error", "message":"There was an internal file system error deleting file file.scpl." }`<br/>
       `{ "status":"error", "message":"There was an internal file system error deleting folder foldername." }`<br/>
       `{ "status":"error", "message":"There was a internal database error deleting file file.scpl." }`<br/>
       `{ "status":"error", "message":"There was a internal database error deleting folder foldername." }`<br/>
       `{ "status":"error", "message":"File|Folder does not appear to exist." }`<br/>
       `{ "status":"error", "message":"You do not appear to own that file|folder." }`<br/>
       `{ "status":"error", "message":"Invalid file|folder ID." }`

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
