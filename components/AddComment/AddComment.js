import styled from "styled-components";

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
      <StyledForm onSubmit={handleFormData}>
        <StyledInput name="author" placeholder="name" required />

        <StyledTextArea name="text" placeholder="add comment" required />

        <SubmitButton type="submit">Send Comment</SubmitButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 1rem;
  align-items: center;
`;

const StyledInput = styled.input`
  all: unset;
  background-color: #575757;
  border-radius: 5px;
  padding: 3px 5px;
  width: 100%;
  font-weight: 300;
  font-size: 15px; 
  color: var(--on-surface);
  &::placeholder {
    color: var(--hover-button);
    
  }
`;

const StyledTextArea = styled.textarea`
  all: unset;
  background-color: #575757;
  border-radius: 5px;
  padding: 3px 5px;
  height: 80px;
  width: 100%;
  font-weight: 300;
  font-size: 15px;  
  color: var(--on-surface);
  &::placeholder {
    color: var(--hover-button);
      
  }
`;

const SubmitButton = styled.button`
  all: unset;
  color: var(--hover-button);
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: var(--hover-button);
    color: var(--on-surface);
  }
`;
