import './UploadShorts.css'

import React from 'react'
import { useState } from "react"

import Input from "../../components/input/Input";
import InputFile from "../../components/inputFile/InputFile";

function UploadShorts() {
    return (
        <>
            <div className='upload__'>
                <Input
                    placeholder={"Título do vídeo"}
                    type={"text"}
                    onChange={handleInputChange}
                    required={true}
                />

                <Input
                    placeholder={"Descrição do vídeo"}
                    type={"text"}
                    onChange={handleInputChange}
                    required={true}
                />

                <select>
                    <option>Artes e Cultura</option>
                    <option>Ciência e Tecnologia</option>
                    <option>Culinária</option>
                    <option>Educação</option>
                    <option>Entretenimento</option>
                    <option>Esportes</option>
                    <option>Documentários</option>
                    <option>Jogos</option>
                    <option>Lifestyle</option>
                    <option>Moda e Beleza</option>
                    <option>Música</option>
                    <option>Viagem e Turismo</option>
                </select>
            </div>

            <InputFile
                label={"Foto de perfil"}
                radius={"20px"}
                onChange={handleInputChange}
            // file={image}
            />

            <Input
                placeholder={"Descrição do vídeo"}
                type={"text"}
                onChange={handleInputChange}
                required={true}
            />

            <Input
                placeholder={"Descrição do vídeo"}
                type={"radio"}
                onChange={handleInputChange}
                required={true}
            />
            <Input
                placeholder={"Descrição do vídeo"}
                type={"radio"}
                onChange={handleInputChange}
                required={true}
            />
        </>
    )
}

export default UploadShorts