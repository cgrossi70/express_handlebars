import { restart } from "nodemon"

const lista = [
  {'id': '0', 'email': 'email@example.com', 'name': 'Example 1'},
  {'id': '1', 'email': 'email@gmial.com.com', 'name': 'Example 2'},
]
const lista_vacia = []


export const index = (req, res, next) => {
  res.render('pages/index', {title: 'Home'})
}

export const about = (req, res, next) => {
  res.render('pages/about', {title: 'About'})
}

export const list = (req, res, next) => {
  res.render('pages/list',{title: 'List', lista: lista, lista_vacia: lista_vacia})
}