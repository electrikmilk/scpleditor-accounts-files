**Get list of files shared with user**
----
Returns a JSON formatted list of files shared with the user. Currently only files may be shared until folder sharing is implemented. Current user has read/write access to returned files. However, current user may not delete, rename, copy, move or change access to any files shared with them.

<_This may eventually be deprecated if files can be worked to double as a way to get files shared with the current user._>

* **URL**

/shared

* **Method:**

  <_The request type_>

  `POST`

*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._>

   **Required:**

   `id=[integer]`

   **Optional:**

   `photo_id=[alphanumeric]`

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
