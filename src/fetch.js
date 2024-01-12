export async function fetchData(link, to) {
  try {
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    to(data.items);
  } catch (error) {
    console.log("Error:", error);
  }
}
