//en la base de datos en users si la columna rol === 0 entonces es administrador, si es 1 es usuario
module.exports = (req, res, next) => {

  if (req.session.user) {
   
    if (req.session.user.rol === 0) {
      return res.redirect("/users/login");
    }

  } 
    else {
    return res.redirect("/users/login");
  }
  next();
};
