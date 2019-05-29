**Search all users**
----
Search users by username. A counter-part of the /access endpoint.

Includes user ID for sending to the 'access' endpoint for the owner of a file to add other users as collaborators. Supplies a list of 50 users at a time searching by usernames using 'query'.

* **URL**

  /users

* **Method:**

  `POST`

*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._>

   **Required:**

   `token=[alphanumeric]`<br/>
   `query=[string]`

* **Success Response:**

    * **Code:** 200 <br />
       **Content:** `[{ "id":"1050", "username":"ScPLUser" },{ "id":"2480", "username":"AnotherScPLUser" }]`

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
         url: "https://account.scpl.dev/api/v1/users",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN",
            query: "Search by username"
         },
         success : function(r) {
           console.log(r);
         }
       });
```
* **Notes:**

     _No notes._
