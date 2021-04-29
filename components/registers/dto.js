const single = (resource) => ({
  id: resource._id,
  fullName,
  email,
  product,
});
const multiple = (resource) => resource.map((resource) => single(resource));
module.exports = {
  single,
  multiple,
};
