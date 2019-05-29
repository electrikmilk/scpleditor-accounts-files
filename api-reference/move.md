**Move File or Folder**
----
Move a file or folder set by 'item_id' to a folder set by 'folder_id'. If no 'folder_id' is given, the file or folder is moved to the root of their files. This endpoint is restricted to the owner of the file or folder.

* **URL**

  /move

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br />
   `item_id=[alphanumeric]`

   **Optional:**

   `folder_id=[alphanumeric]`

  * **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "status" : "success", "message":"File file.scpl has been moved to folder." }`

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
         url: "https://account.scpl.dev/api/v1/move",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            item_id: "FILE_OR_FOLDER_ID"
            folder_id: "FOLDER_ID"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

* **Notes:**

  _No notes._
