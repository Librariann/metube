import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "metubedidact/video",
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "metubedidact/avatar",
  }),
});

export const uploadVideoMiddleware = multerVideo.single("videoFile");
export const uploadAvatarMiddleware = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "MeTube!";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
