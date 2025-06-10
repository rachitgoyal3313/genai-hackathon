// sample code
export default function LoginSelection() {
  return (
    <div>
      <h2>Login as:</h2>
      <button onClick={() => window.location.href = "/doctor"}>Doctor</button>
      <button onClick={() => window.location.href = "/patient"}>Patient</button>
      <button onClick={() => window.location.href = "/staff"}>Staff</button>
    </div>
  );
}
