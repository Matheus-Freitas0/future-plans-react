import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ImportantPlans.css";

function ImportantPlans() {
  const [plans, setPlans] = useState([]); 
  const [newPlan, setNewPlan] = useState({
    title: "",
    description: "",
    date: "",
    imageUrl: "",
  });

  const fetchPlans = async () => {
    try {
      const response = await axios.get("/api/plans");
      setPlans(Array.isArray(response.data) ? response.data : []); 
    } catch (error) {
      console.error("Erro ao buscar os planos:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleAddPlan = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/plans", newPlan);
      setPlans([...plans, response.data]); 
      setNewPlan({ title: "", description: "", date: "", imageUrl: "" });
    } catch (error) {
      console.error("Erro ao adicionar o plano:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlan({ ...newPlan, [name]: value });
  };

  return (
    <div className="important-plans">
      <h1 className="textPrinc">Main Plans</h1>
      
      <form className="plan-form" onSubmit={handleAddPlan}>
        <input
          type="text"
          name="title"
          placeholder="Título do Plano"
          value={newPlan.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={newPlan.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newPlan.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL da imagem"
          value={newPlan.imageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Plano</button>
      </form>

      <div className="plans-cards">
        {plans.map((plan, index) => {
          const formattedDate = new Date(plan.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
          
          return (
            <div className="plan-card" key={index}>
              <img className="img-card" src={plan.imageUrl || 'path/to/default-image.jpg'} alt={plan.title} />
              <h1 className="text-card">{plan.title}</h1>
              <details className="detail-card">
                <summary>Detalhes</summary>
                <div>
                  <p>{plan.description}</p>
                  <p>Data: {formattedDate}</p> 
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImportantPlans;
