import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import NavBar from "../components/NavBar";


const Index = ({ jobs, filters }) => (
  <div className="bg-neutral-100">
    <NavBar />
    <Jobs jobs={jobs} filters={filters} />
    <Footer />
  </div>
);

export async function getServerSideProps(context) {
  const resjobs = await fetch(`http://localhost:3000/api/jobs`);
  const jobs = await resjobs.json();
  const resfilters = await fetch(`http://localhost:3000/api/filters`);
  const filters = await resfilters.json();
  return {
    props: { jobs, filters }, // will be passed to the page component as props
  };
}

export default Index;
