export default function Form({ children, formSubmit }) {
  return (
    <>
      <form onSubmit={formSubmit}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
