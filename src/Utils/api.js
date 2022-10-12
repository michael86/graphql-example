import axios from "axios";

export const getApiData = async (limit) => {
  const query = `{
  rockets(limit: ${limit}) {
    id
    active
    first_flight
    name
    success_rate_pct
    wikipedia
    description
  }
}`;

  try {
    const res = await axios.post("https://api.spacex.land/graphql/", {
      query,
    });

    if (res.status !== 200 || !res.data.data.rockets) return; //Return sod all, as something bad happened.

    return res.data.data.rockets;
  } catch (e) {
    console.log("error", e);
    return;
  }
};
