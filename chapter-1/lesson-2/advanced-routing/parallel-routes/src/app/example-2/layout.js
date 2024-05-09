const useLogin = () => {
  return "admin";
};

export default function Example2Layout({ children, route1, route2 }) {
  const role = useLogin();
  return (
    <section>
      <div style={{ padding: "20px" }}>
        {role === "admin" ? route1 : route2}
      </div>
      {children}
    </section>
  );
}
