function status(request, response) {
  response.status(200).json({ status: "olá" });
}

export default status;