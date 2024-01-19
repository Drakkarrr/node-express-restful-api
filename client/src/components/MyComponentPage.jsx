import { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponentPage = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: '' });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUpdate = async () => {
    try {
      if (editPost) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${editPost.id}`,
          formData
        );
        setData(
          data.map((item) => (item.id === editPost.id ? response.data : item))
        );
        setEditPost(null);
      } else {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/posts',
          formData
        );
        setData([...data, response.data]);
      }
      setFormData({ title: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setFormData({ title: post.title });
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateUpdate}>
          {editPost ? 'Update Post' : 'Create Post'}
        </button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {editPost === item ? (
              <div>
                <input
                  type='text'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <button onClick={handleCreateUpdate}>Update</button>
              </div>
            ) : (
              <div>
                {item.title}
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponentPage;
