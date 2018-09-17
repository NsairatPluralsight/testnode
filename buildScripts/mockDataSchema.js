
import jsf from 'json-schema-faker';

export const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 3,
        "maxItems": 5,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": 'name.findName'
            },
            "lastName": {
              "type": "string",
            "faker": 'name.findName'
            },
            "email": {
              "type": "string",
              "faker": 'internet.email'
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      }
    },
    "required": ["users"]
  };

  jsf.resolve(schema).then(function(sample) {
    console.log(sample);
    // "[object Object]"

    console.log(sample.user.name);
    // "John Doe"
  });
