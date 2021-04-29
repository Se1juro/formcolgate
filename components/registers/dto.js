const single = (resource) => ({
  id: resource._id,
  fullName: resource.fullName,
  email: resource.email,
  product: resource.product,
});
const multiple = (resource) => resource.map((resource) => single(resource));
module.exports = {
  single,
  multiple,
};
