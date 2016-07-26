jQuery(document).ready(function ($) {
    var Validate = (function () {
        var method = function (form) {
            this.frm = form;
            this.formID = this.frm.getAttribute('id');
            this.inputs = this.frm.getElementsByClassName('js-validate');
            this.count = this.inputs.length;
        };


        method.prototype.checkForm = function () {
            var errors = 0,//кол-во ошибок
                isFormValid = false;//результат проверки полей

            for (var i = 0; i < this.count; i++) {
                var elem_val = this.inputs[i].value,
                    valid_type = this.inputs[i].getAttribute('data-validate');

                switch (valid_type) {//3 типа - required, phone, email
                    case 'required':
                        var elem_type = this.inputs[i].tagName.toLowerCase();
                        if (elem_type === 'input') {//если поле - input
                            this.checkRequiredInput(this.inputs[i], elem_val);
                            if (!this.checkRequiredInput(this.inputs[i], elem_val)) {
                                errors++;
                            }
                        } else {//если поле - select
                            if (!this.checkRequiredSelect(this.inputs[i], elem_val)) {
                                errors++;
                            }
                        };
                        break;
                    case 'phone':
                        if (!this.checkPhone(this.inputs[i], elem_val)) {
                            errors++;
                        };
                        break;
                    case 'email':
                        if (!this.checkEmail(this.inputs[i], elem_val)) {
                            errors++;
                        };
                        break;
                };
            };

            if (errors === 0) {//если нет ошибок в полях
                isFormValid = true;
            };
            return isFormValid;
        };

        method.prototype.checkRequiredInput = function (el, val) {//если обязательное поле
            var result = false;
            if (val.length > 0) {
                result = true;
                this.removeErrorClass(el);
            } else {
                this.addErrorClass(el);
            };
            return result;
        };

        method.prototype.checkRequiredSelect = function (el, val) {//если обязателен селект
            var result = false;
            if (val !== 'label') {//если значение селекта label - вернем ошибку!!!
                result = true;
                this.removeErrorClass(el);
            } else {
                this.addErrorClass(el);
            };
            return result;
        };

        method.prototype.checkPhone = function (el, val) {//телефон. Разрешаем +, цифры, тире, пробелы, скобки
            var result = false,
                reg = /^[\d\+]+[\d\(\)\ -]{4,20}\d$/;
            if (reg.test(val) && val.length <= 20) {//разрешим не более 20 символов
                result = true;
                this.removeErrorClass(el);
            } else {
                this.addErrorClass(el);
            };
            return result;
        };

        method.prototype.checkEmail = function (el, val) {//email
            var result = false,
                reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (reg.test(val)) {
                result = true;
                this.removeErrorClass(el);
            } else {
                this.addErrorClass(el);
            };
            return result;
        };

        method.prototype.addErrorClass = function (el) {//покажем сообщение об ошибке
            $(el).parents('.g-fieldset').addClass('error');
        };

        method.prototype.removeErrorClass = function (el) {//скроем сообщение об ошибке
            $(el).parents('.g-fieldset').removeClass('error');
        };

        method.prototype.clearForm = function () {//очистим поля (инпуты) и закроем все модальные окна
            for (var i = 0; i < this.count; i++) {
                var elem_type = this.inputs[i].tagName.toLowerCase();
                if (elem_type === 'input') {
                    this.inputs[i].value = '';
                }
            };
            $.arcticmodal('close');//если были открыты модальные окна - закроем
        };

        method.prototype.showOkMsg = function () {
            $('#ok_msg').arcticmodal();//покажем сообщение (универсальное) что все ОК
        };

        return method;
    })();


    //Заказать звонок:
    var callback_form = document.getElementById('callback'),
        callback = new Validate(callback_form);
    callback_form.addEventListener('submit', callback_send.bind(callback));

    function callback_send(e) {
        e.preventDefault();//вырубили стандартную отправку
        var check_result = callback.checkForm();

        if (check_result) {//форма прошла проверку
            //пример обработчика
            console.log('Отправляем форму ' + this.formID);
            /// отправка
            var data = $(callback_form).serialize();
            $.ajax({
                //type: 'POST',
                //url: 'example.php',
                //dataType: 'json',
                data: data,
                beforeSend: function (data) {
                    $(callback_form).find('button[type="submit"]').attr('disabled', 'disabled');//блокируем кнопку
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else { // ok
                        callback.clearForm();//очистили
                        callback.showOkMsg();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function (data) {
                    $(callback_form).find('button[type="submit"]').prop('disabled', 'false');//разблокируем кнопку
                }
            });

        } else {
            console.log('Форма содержит ошибки!');
        }
    };

    //Записаться на курс
    var enroll_form = document.getElementById('enroll'),
        enroll = new Validate(enroll_form);
    enroll_form.addEventListener('submit', enroll_send.bind(enroll));

    function enroll_send(e) {
        e.preventDefault();//вырубили стандартную отправку
        var check_result = enroll.checkForm();
        if (check_result) {
            console.log('Отправляем форму ' + this.formID);
            ///
            enroll.clearForm();//очистили
            enroll.showOkMsg();
        } else {
            console.log('Форма содержит ошибки!');
        }
    };

    //Получить консультацию
    var consultation_form = document.getElementById('consultation'),
        consultation = new Validate(consultation_form);
    consultation_form.addEventListener('submit', consultation_send.bind(enroll));

    function consultation_send(e) {
        e.preventDefault();//вырубили стандартную отправку
        var check_result = consultation.checkForm();
        if (check_result) {
            console.log('Отправляем форму ' + this.formID);
            consultation.clearForm();//очистили
            consultation.showOkMsg();
        } else {
            console.log('Форма содержит ошибки!');
        }
    };

    //связаться с нами
    var order_form = document.getElementById('order'),
        order = new Validate(order_form);
    order_form.addEventListener('submit', order_send.bind(order));

    function order_send(e) {
        e.preventDefault();//вырубили стандартную отправку
        var check_result = order.checkForm();
        if (check_result) {
            console.log('Отправляем форму ' + this.formID);
            order.clearForm();//очистили
            order.showOkMsg();
        } else {
            console.log('Форма содержит ошибки!');
        }
    };
});