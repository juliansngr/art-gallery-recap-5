export default function AddComment({ slug, handleAddComment }) {
  const handleFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const currentDate = new Date();
    const formatDate = `${currentDate.getDate()}.${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()} at ${currentDate.getHours()}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}`;

    event.target.author.value = "";
    event.target.text.value = "";

    handleAddComment({ ...data, slug, date: formatDate });
  };
  return (
    <>
      <form onSubmit={handleFormData}>
        <input name="author" placeholder="name" required />
        <br />
        <textarea name="text" placeholder="add comment" required />
        <br />
        <button type="submit">Send Comment</button>
      </form>
    </>
  );
}
