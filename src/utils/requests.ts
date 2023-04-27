interface User {
  email: string;
  password: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const apiURL = "https://mockapi.io/api/v1";

export const login = async (user: User): Promise<boolean> => {
  try {
    const response = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      // Successful login
      return true;
    } else {
      // Login failed
      console.error(data.error);
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${apiURL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
