class Rabotnic {
  constructor() {
    this.Name ;
    this.familia ;
    this.otches ;
    this.Age ;
    this.Pasport ;
    this.telefon ;
  }
 PlusRabotnic (){
        this.Name = prompt('Введите Имя нового работника', Text);
        this.familia = prompt('Введите Фамилию нового работника', Text);
        this.otches = prompt('Введите отчество нового работника', Text);
        this.Age = prompt('Введите свой возраст', 100);
        this.Pasport = prompt ('Введите паспортные данные', Text);
        this.telefon = prompt ('Введите телефон работника');
        alert ('Новый работник'+ this.Name + " "+ this.familia +" "+ this.otches +" " + this.Age +" " + this.Pasport +" " + this.telefon + 'добавлен в базу сотрудников.');
  };
  
   PolychitDannie (){
      prompt ('Введите имя работника', this.Name);
      alert ('Данные работника', + this.Name+ +this.familia+ +this.otches+ 'в базе данных');
    };
    

}

let maxim=new Rabotnic();
maxim.PlusRabotnic();
maxim.PolychitDannie();


class Exponat {
    constructor() {
      this.Nazvania ;
      this.Data ;
      this.Opisania ;
    }
   PlusExponat (){
          this.Nazvania = prompt('Введите название нового экспоната', Text);
          this.Data = prompt('Введите дату создания экспоната', 3000);
          this.Opisania = prompt ('Введите описание', Text);
          alert ('Новый экспонат'+ this.Nazvania + " "+ this.Data +" "+ this.Opisania+ 'добавлен в базу данных экспонатов.');
    };
    
     PoisktDannie (){
        prompt ('Введите название экспоната', this.Nazvania);
        alert ('Данные экспоната', + this.Nazvania+ "  " +this.Data+ "  " +this.Opisania+ 'в базе данных');
      };
      
  
  }
  
