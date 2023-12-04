import { Component, OnInit } from '@angular/core';
import { EventoService } from './evento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacoesService } from './informacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'pirg';
  listEvent = []
  mensagem: string
  loading: boolean
  meuFormulario: FormGroup;
  info: string
  isChecked = false;
  
  constructor(private fb: FormBuilder, 
    private eventoService: EventoService,
    private informacoesService: InformacoesService
    ) {
  }

  deletar(id, semana) {
    this.deletarEvento(id, semana)
  }


  deletarEvento(id, semana) {
    this.eventoService.deletarEvento(id)
      .subscribe(response => {
        console.log(`Evento deletada com sucesso! ID=`, response)
        console.log(this.meuFormulario.value.semana, this.index)
        this.getEvento(semana, this.index)
      })
  }

  recarregarPagina() {
    location.reload();
  }

  ngOnInit(): void {
    this.loading = true
    this.getEvento('sun', this.index)
    this.meuFormulario = this.fb.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      categoria: ['', Validators.required],
      informacoes: ['', Validators.required],
      concluido: [false],
      semana: null
    });
  }

  postEvento() {
    this.info = this.meuFormulario.value.informacoes
    delete this.meuFormulario.value.informacoes
    console.log(this.meuFormulario.value.data)
    this.meuFormulario.value.concluido = false
    const date = this.meuFormulario.value.data
    console.log(this.meuFormulario.value.data)
    this.meuFormulario.value.semana = new Date(`${new Date(date).getFullYear()}-${new Date(date).getMonth()+1}-${new Date(date).getDate()+2}`).toLocaleDateString('en-US',  {weekday: 'short'} )
this.eventoService.postEvento(this.meuFormulario.value)
      .subscribe(response => {
        console.log(response, 'presta atencao aqui')
        this.postInformacoes(response.result.id)
      })
  }

  postInformacoes(id) {
    const payload = {
      id_evento: id,
      texto: this.info
    }
    this.informacoesService.postInformacoes(payload).subscribe(response => {
      console.log('tudo cadastrado com sucesso', response)
    })
  }

  enviarFormulario() {
    this.postEvento()

  }

  index = 1
  getEvento(semana, index) {
    this.index = index
    this.eventoService.getEvento(semana).subscribe(data => {
      if(this.isObject(data.result)) {
        this.listEvent = [data.result]
        this.mensagem = 'Não há tarefa'
      } else {
        this.listEvent = data.result
      }
      console.log(this.listEvent)
      this.loading = false
    })
  }

  idUpdate
  updateCheck(item, isChecked) {
    const payload = {
      nome: item.nome,
      data: item.data,
      categoria: item.categoria,
      concluido: isChecked,
      semana: item.semana
  }

    this.eventoService.putEvento(payload, item.id)
      .subscribe(response => {
        console.log('update', response)
      }
    )
  }

  contemObjetoVazio(arr) {
    return arr.some(obj => Object.keys(obj).length === 0);
  }


  isObject(variable) {
    return variable !== null && typeof variable === 'object' && !Array.isArray(variable);
  }
}
