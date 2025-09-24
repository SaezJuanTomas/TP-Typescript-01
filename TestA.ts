class TestA {
    public static main(): void {
        // Crear instancia de Vehiculo
        const vehiculo = new Vehiculo("ABC123", "Toyota", "Corolla");

        // Crear 3 instancias de HojaRuta
        const hojaRuta1 = new HojaRuta(new Date(2024, 5, 1), 1, vehiculo);
        const hojaRuta2 = new HojaRuta(new Date(2024, 5, 2), 2, vehiculo);
        const hojaRuta3 = new HojaRuta(new Date(2024, 5, 3), 3, vehiculo);

        // Crear detalles para cada hoja de ruta
        
        const detallehoja1 =    new Detalle(10, 15, 9, 11, 0, 30, hojaRuta1);
        const detallehoja2 =    new Detalle(20, 30, 10, 12, 0, 30, hojaRuta1);
        const detallehoja3 =    new Detalle(30, 45, 11, 13, 0, 30, hojaRuta1);
        
        
        const detallehoja21 =    new Detalle(12, 18, 9, 11, 0, 30, hojaRuta2);
        const detallehoja22 =    new Detalle(24, 36, 10, 12, 0, 30, hojaRuta2);
        const detallehoja23 =    new Detalle(36, 54, 11, 13, 0, 30, hojaRuta2);
        
        
        const detallehoja31 =    new Detalle(14, 21, 9, 11, 0, 30, hojaRuta3);
        const detallehoja32 =    new Detalle(28, 42, 10, 12, 0, 30, hojaRuta3);
        const detallehoja33 =    new Detalle(42, 63, 11, 13, 0, 30, hojaRuta3);
        
        hojaRuta1.agregarDetalle(detallehoja1);
        hojaRuta1.agregarDetalle(detallehoja2);
        hojaRuta1.agregarDetalle(detallehoja3);

        hojaRuta2.agregarDetalle(detallehoja21);
        hojaRuta2.agregarDetalle(detallehoja22);
        hojaRuta2.agregarDetalle(detallehoja23);

        hojaRuta3.agregarDetalle(detallehoja31);
        hojaRuta3.agregarDetalle(detallehoja32);
        hojaRuta3.agregarDetalle(detallehoja33);

        // Agregar hojas de ruta al vehículo
        vehiculo.agregarHojaRuta(hojaRuta1);
        vehiculo.agregarHojaRuta(hojaRuta2);
        vehiculo.agregarHojaRuta(hojaRuta3);

        // Mostrar resultados por pantalla
        console.log(vehiculo.toString());
    }
}

