import { Component, OnInit } from '@angular/core';
import { EventoService } from './evento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacoesService } from './informacoes.service';

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
  
  constructor(private fb: FormBuilder, 
    private eventoService: EventoService,
    private informacoesService: InformacoesService
    ) {
  }
  ngOnInit(): void {
    this.loading = true
    this.getEvento('sun', 1)
    this.meuFormulario = this.fb.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      categoria: [''],
      informacoes: [''],
      concluido: false,
      semana: null
    });
  }

  postEvento() {
    this.info = this.meuFormulario.value.informacoes
    delete this.meuFormulario.value.informacoes
    console.log(this.meuFormulario.value.data)
    this.meuFormulario.value.semana = new Date(this.meuFormulario.value.data).toDateString().substring(0, 3)
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
    // console.log(this.meuFormulario.value)
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


  contemObjetoVazio(arr) {
    return arr.some(obj => Object.keys(obj).length === 0);
  }


  isObject(variable) {
    return variable !== null && typeof variable === 'object' && !Array.isArray(variable);
  }
}
