**Change File Access**
----
Add collaborators to a file. This will give the selected collaborators read/write access. However, collaborators may not delete, rename, copy, move or change access to any files shared with them. Currently only files may be shared until folder sharing is implemented. This endpoint is restricted to the owner of the file.

* **URL**

   /access

* **Method:**

   `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`
   `id=[alphanumeric]`
   `users=[comma-separated-list]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "status" : "success", "message":"Collaborators were set for file.scpl" }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ "status":"error", "message":"No authentication token was received." | "Invalid authentication token." }`

  OR

  * **Code:** 503 SERVICE_UNAVAILABLE <br />
    **Content:** `{ "status":"error", "message":"Permission errors, invalid file ID" }`

* **Sample Call:**

```javascript
    $.ajax({
      url: "https://account.scpl.dev/api/v1/access",
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
