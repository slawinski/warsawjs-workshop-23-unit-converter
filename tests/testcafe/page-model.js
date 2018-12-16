import { Selector as $ } from 'testcafe';

export class Page {
    constructor() {

        const t = {
        value1: $('.temperature .value1'),
        value2: $('.temperature .value2'),
        unit1: $('.temperature .unit1'),
        unit2: $('.temperature .unit2'),
        left: $('.temperature .left'),
        right: $('.temperature .right'),
        }

        t.c1 = t.unit1.find('option').withText('C')
        t.f1 = t.unit1.find('option').withText('F')
        t.k1 = t.unit1.find('option').withText('K')
        t.c2 = t.unit2.find('option').withText('C')
        t.f2 = t.unit2.find('option').withText('F')
        t.k2 = t.unit2.find('option').withText('K')

        this.temperature = t;

        const c = {
        value1: $('.currency .value1'),
        value2: $('.currency .value2'),
        unit1: $('.currency .unit1'),
        unit2: $('.currency .unit2'),
        left: $('.currency .left'),
        right: $('.currency .right'),
        }

        c.p1 = c.unit1.find('option').withText('PLN')
        c.e1 = c.unit1.find('option').withText('EUR')
        c.u1 = c.unit1.find('option').withText('USD')
        c.p2 = c.unit2.find('option').withText('PLN')
        c.e2 = c.unit2.find('option').withText('EUR')
        c.u2 = c.unit2.find('option').withText('USD')

        this.currency = c;

        const s = {
        value1: $('.speed .value1'),
        value2: $('.speed .value2'),
        unit1: $('.speed .unit1'),
        unit2: $('.speed .unit2'),
        left: $('.speed .left'),
        right: $('.speed .right'),
        };

        s.k1 = s.unit1.find('option').withText('km/h')
        s.m1 = s.unit1.find('option').withText('mph')
        s.k2 = s.unit2.find('option').withText('km/h')
        s.m2 = s.unit2.find('option').withText('mph')

        this.speed = s;
    }
}
