import jobs from "../../data/jobs";

export default async (req, res) => {
  res.statusCode = 200;

  if (req.query) {
    const filterval = req.query;
    const type = Object.keys(filterval)[0];
    const filter = Object.values(filterval)[0];

    let result = [];
    switch (type) {
      case "job type":
        jobs.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].job_type.toLowerCase() === filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        res.json(result);
        break;
      case "department":
        jobs.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            for (let j = 0; j < hospital.items[i].department.length; j++) {
              if (
                hospital.items[i].department[j].toLowerCase().includes(filter.toLowerCase())
              )
                result.push(hospital.items[i]);
            }
          }
        });
        res.json(result);
        break;
      case "work schedule":
        jobs.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].work_schedule.toLowerCase() ===
              filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        res.json(result);
        break;
      case "experience":
        jobs.forEach((hospital) => {
          for (let i = 0; i < hospital.items.length; i++) {
            if (
              hospital.items[i].experience.toLowerCase() ===
              filter.toLowerCase()
            )
              result.push(hospital.items[i]);
          }
        });
        res.json(result);
        break;

      default:
        // this timeout emulates unstable network connection, do not remove this one
        // you need to figure out how to guarantee that client side will render
        // correct results even if server-side can't finish replies in the right order
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.random())
        );
        res.json({ jobs: jobs });
        break;
    }
  }
  // @todo: implement filters and search
  // @todo: implement automated tests
};
