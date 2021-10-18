import express, { Application, Request, Response } from 'express';

const app: Application = express()
const port = 8080; // default port to listen

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// define a route handler for the default home page
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello world! Game!");
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${port}` );
} );