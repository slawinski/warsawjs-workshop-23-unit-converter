$('.temperature .left').click(() => {
  const type = 'temperature';
  const fromValue = $('.temperature .value2').val();
  const fromUnit = $('.temperature .unit2').val();
  const toUnit = $('.temperature .unit1').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/temperature', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.temperature .value1').val(data.result);
  });
});

$('.temperature .right').click(() => {
  const type = 'temperature';
  const fromValue = $('.temperature .value1').val();
  const fromUnit = $('.temperature .unit1').val();
  const toUnit = $('.temperature .unit2').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/temperature', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.temperature .value2').val(data.result);
  });
});

$('.currency .left').click(() => {
  const type = 'currency';
  const fromValue = $('.currency .value2').val();
  const fromUnit = $('.currency .unit2').val();
  const toUnit = $('.currency .unit1').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/currency', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.currency .value1').val(data.result);
  });
});

$('.currency .right').click(() => {
  const type = 'currency';
  const fromValue = $('.currency .value1').val();
  const fromUnit = $('.currency .unit1').val();
  const toUnit = $('.currency .unit2').val();
  console.log({ type, fromValue, fromUnit, toUnit });
  $.getJSON('/api/currency', { fromValue, fromUnit, toUnit }, (data) => {
    console.log(data);
    $('.currency .value2').val(data.result);
  });
});

////////

$('.speed .left').click(() => {
  const type = 'speed';
  const fromValue = $('.speed .value2').val();
  const fromUnit = $('.speed .unit2').val();
  const toUnit = $('.speed .unit1').val();
  console.log({ type, fromValue, fromUnit, toUnit });

  if (fromUnit === toUnit) {
    $('.speed .value1').val( fromValue );
  } else if (fromUnit === 'km/h' && toUnit === 'mph') {
    $('.speed .value1').val( fromValue / 1.6 );
  } else if (fromUnit === 'mph' && toUnit === 'km/h') {
    $('.speed .value1').val( fromValue * 1.6 );
  }
});

$('.speed .right').click(() => {
  const type = 'speed';
  const fromValue = $('.speed .value1').val();
  const fromUnit = $('.speed .unit1').val();
  const toUnit = $('.speed .unit2').val();
  console.log({ type, fromValue, fromUnit, toUnit });

  if (fromUnit === toUnit) {
    $('.speed .value2').val( fromValue );
  } else if (fromUnit === 'km/h' && toUnit === 'mph') {
    $('.speed .value2').val( fromValue / 1.6 );
  } else if (fromUnit === 'mph' && toUnit === 'km/h') {
    $('.speed .value2').val( fromValue * 1.6 );
  }
});
