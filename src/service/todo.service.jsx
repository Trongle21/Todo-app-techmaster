const createTask = async (title, completed) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    title,
    completed,
  });

  let response = await fetch("https://jsonserver-fhn2.onrender.com/api/todos", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });
  let data = await response.json();
  return data;
};

const deleteTask = async (id) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(
    `https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
};

const updateTask = async (id, completed) => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    completed,
  });

  let response = await fetch(
    ` https://jsonserver-fhn2.onrender.com/api/todos/${id}`,
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
};

export { createTask, deleteTask, updateTask };
