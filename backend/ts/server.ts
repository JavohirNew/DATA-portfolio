import  Express  from "express";
import projectRoutes from "./routes/project.routes";
import authorRoutes  from "./routes/author.routes";
import adminRoutes from "./routes/admin.routes";
import cors from "cors";

const app = Express();
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use("/projects", projectRoutes);
app.use("/authors", authorRoutes);
app.use("/admin", adminRoutes);


app.listen(5050, ()=> {console.log('server i running 5050')});