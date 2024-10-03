"use client";
import React, { useState } from 'react';

const CadastroImovel = () => {
    const [imovel, setImovel] = useState({
        imagens: [],
        endereco: {
            estado: '',
            cidade: '',
            cep: '',
            logradouro: '',
            numero: '',
            bairro: ''
        },
        objetivo: '',
        aluguel: false,
        venda: false,
        tipo: '',
        suites: 0,
        financiamento: false,
        id_anunciante: 1,
        vagas: 0,
        area_construida: 0,
        area_total: 0,
        descricao: '',
        dormitorio: 0,
        valor: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.startsWith('endereco.')) {
            const fieldName = name.split('.')[1];
            setImovel((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, [fieldName]: value }
            }));
        } else if (name === 'imagens') {
            setImovel((prev) => ({
                ...prev,
                imagens: [...prev.imagens, value] // Aqui você pode implementar lógica para imagens
            }));
        } else if (type === 'checkbox') {
            setImovel((prev) => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setImovel((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/properties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(imovel),
            });
            console.log(imovel);

            if (!response.ok) {
                throw new Error('Erro ao cadastrar imóvel');
            }

            const data = await response.json();
            console.log('Imóvel cadastrado com sucesso:', data);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className="flex-1 p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                    <label className="block text-lg font-bold mb-4">Imagens</label>
                    <div className="border-dashed border-2 border-gray-300 p-6 flex items-center justify-center">
                        <img src="../../assets/images/upload.png" alt="Upload" className="h-16" />
                    </div>

                    <label className="block text-lg font-bold mb-4">Estado</label>
                    <input
                        type="text"
                        name="endereco.estado"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Estado"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Cidade</label>
                    <input
                        type="text"
                        name="endereco.cidade"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Cidade"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Logradouro</label>
                    <input
                        type="text"
                        name="endereco.logradouro"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Logradouro"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">CEP</label>
                    <input
                        type="text"
                        name="endereco.cep"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="CEP"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Bairro</label>
                    <input
                        type="text"
                        name="endereco.bairro"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Bairro"
                        onChange={handleChange}
                    />
                </div>

                <div className="col-span-1">
                    <label className="block text-lg font-bold mb-4">Área construída</label>
                    <input
                        type="number"
                        name="area_construida"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Área construída"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Área total</label>
                    <input
                        type="number"
                        name="area_total"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Área total"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Dormitórios</label>
                    <input
                        type="number"
                        name="dormitorios"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Dormitórios"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Valor</label>
                    <input
                        type="text"
                        name="valor"
                        className="w-full border rounded p-2 mb-4"
                        placeholder="Valor"
                        onChange={handleChange}
                    />

                    <label className="block text-lg font-bold mb-4">Descrição</label>
                    <textarea
                        name="descricao"
                        className="w-full border rounded p-2"
                        placeholder="Descrição"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default CadastroImovel;
