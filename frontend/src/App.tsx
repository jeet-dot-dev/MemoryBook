import axios from "axios";
import { useState } from "react";

const App = () => {
  interface DATA {
    title: string;
    date: Date;
    skills: string;
    summary: string;
  }

  // State variables
  const [data, setData] = useState<DATA>({
    title: '',
    date: new Date(),
    skills: '',
    summary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!data.title || !data.date || !data.skills || !data.summary) {
        alert('Please fill all the fields');
        return;
      }
      const response = await axios.post(import.meta.env.VITE_API_URL, data);
      alert('Memory saved successfully');
      console.log(response);
      // Clear form after successful submission
      setData({
        title: '',
        date: new Date(),
        skills: '',
        summary: ''
      });
    } catch (error) {
      console.log(error);
      alert('Failed to save your memory');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-10 px-4 font-serif">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200">
        <div className="bg-amber-100 p-6 border-b border-amber-200">
          <div className="heading text-center">
            <h1 className="text-3xl font-bold text-amber-800 mb-2">Memory Book</h1>
            <h2 className="text-lg text-amber-600 italic">Your Personal AI Diary</h2>
          </div>
        </div>
        
        <div className="form p-8 bg-amber-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="title" className="block text-amber-800 font-medium mb-1">Title of Memory</label>
              <input 
                name="title" 
                type="text" 
                id="title" 
                value={data.title}
                placeholder="Enter a title for this memory" 
                onChange={handleChange}
                className="w-full p-3 border border-amber-300 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date" className="block text-amber-800 font-medium mb-1">Date</label>
              <input 
                name="date" 
                type="date" 
                id="date" 
                value={typeof data.date === 'object' ? data.date.toISOString().split('T')[0] : data.date}
                placeholder="When did this happen?" 
                onChange={handleChange}
                className="w-full p-3 border border-amber-300 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="skills" className="block text-amber-800 font-medium mb-1">Skills Learned</label>
              <input 
                name="skills" 
                type="text" 
                id="skills"
                value={data.skills}
                placeholder="What new skills did you learn today?" 
                onChange={handleChange}
                className="w-full p-3 border border-amber-300 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="summary" className="block text-amber-800 font-medium mb-1">Summary of Your Day</label>
              <textarea 
                name="summary" 
                id="summary"
                value={data.summary}
                placeholder="Write about your day..." 
                onChange={handleChange}
                rows={6}
                className="w-full p-3 border border-amber-300 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm resize-none" 
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors shadow-md"
              >
                Save This Memory
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-6 text-center text-amber-700">
        <div className="inline-block p-4 bg-white border border-amber-200 rounded-lg shadow-sm">
          <p className="font-medium">Cherish your memories, one entry at a time.</p>
          <div className="mt-2 flex justify-center space-x-3">
            <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
            <div className="w-8 h-8 bg-amber-300 rounded-full"></div>
            <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;