import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  console.log(videos);
  res.render("search", { videos, pageTitle: "search", searchingBy });
};

//비디오 상세
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const videoDetailInfo = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "videoDetail", videoDetailInfo });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

//비디오 getEdit
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const videoEditInfo = await Video.findById(id);
    res.render("editVideo", {
      pageTitle: `Edit ${videoEditInfo.title}`,
      videoEditInfo,
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.home);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};

//비디오 post 업로드
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { location },
  } = req;
  console.log(req.file);
  const newVideo = await Video.create({
    fileUrl: location,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndDelete({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
