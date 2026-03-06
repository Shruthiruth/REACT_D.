import jsonServer from 'json-server'
import cors from 'cors'
import auth from 'json-server-auth'

const app = jsonServer.create()
const router = jsonServer.router('db2.json')

app.db = router.db

app.use(cors())
app.use(jsonServer.defaults())
app.use(auth)
app.use(router)

app.listen(3001, () => {
  console.log('JSON Server is running on port 3001')
})