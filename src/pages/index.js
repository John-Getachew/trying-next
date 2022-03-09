import Card from "../components/shared/card";
import GenericTable from "../components/shared/table";

export default function HomePage() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card />
      </div>
    </>
  );
}
