**Rename file or folder**
----
Rename a file or folder specified by 'id'. 'name' is the new name of the file or folder. This endpoint is restricted to the owner of the file or folder.

* **URL**

  /rename

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`<br/>
   `id=[alphanumeric]`<br/>
   `name=[string]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:** `{ "name":"renamed file.scpl" }`

* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

    * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:** `{ "status":"error", "message":"Permission errors, invalid file ID" }`

* **Sample Call:**

```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/rename",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            id: "FILE_ID",
            name: "New Name"
         },
         success : function(r) {
           console.log(r);
         }
       });
```

* **Notes:**

     This endpoint returns the name of the file because it removes any special characters from the file name for you.
