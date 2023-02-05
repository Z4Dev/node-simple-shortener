
# Link shortener 

A small project developed for studies



## Reference

 - [Demo](https://js-encurtador.vercel.app/short)


## Stack Used

- ExpressJs
- Mustache
- Sequelize
- CSS
- Javascript


## Environment Variables

To run this project, you will need to add the following environment variables to your .env

`HOST`

`USER`

`PASSWORD`

`DATABASE`

#### This information has to be from mysql.
## API documentation

#### Adds a new shortened link

```http
  POST short/api/
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `link` | `string` | **Required**. The link that will be shortened |

## Deploy

#### To deploy this project run:

```bash
   yarn run start
```


## Developers

- [@Z4Dev](https://www.github.com/Z4Dev)

