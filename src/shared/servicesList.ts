
import deliverTruck1x1 from '../assets/image/services/deliver-truck-460.jpg'
import deliverAir1x1 from '../assets/image/services/deliver-air-460.jpg'
import tamognia1x1 from '../assets/image/services/tamognia-460.jpg'
import precooling1x1 from '../assets/image/services/precooling-460.jpg'
import sklad1x1 from '../assets/image/services/sklad-460.jpg'
import help1x1 from '../assets/image/services/help-460.jpg'
import tracking1x1 from '../assets/image/services/tracking-460.jpg'
import deliverTruck316 from '../assets/image/services/deliver-truck-316.jpg'
import deliverAir316 from '../assets/image/services/deliver-air-316.jpg'
import tamognia316 from '../assets/image/services/tamognia-316.jpg'
import precooling316 from '../assets/image/services/precooling-316.jpg'
import sklad316 from '../assets/image/services/sklad-316.jpg'
import help316 from '../assets/image/services/help-316.jpg'
import tracking316 from '../assets/image/services/tracking-316.jpg'
import deliverTruck1160 from '../assets/image/services/deliver-truck-1160.jpg'
import deliverAir1160 from '../assets/image/services/deliver-air-1160.jpg'
import tamognia1160 from '../assets/image/services/tamognia-1160.jpg'
import precooling1160 from '../assets/image/services/precooling-1160.jpg'
import sklad1160 from '../assets/image/services/sklad-1160.jpg'
import help1160 from '../assets/image/services/help-1160.jpg'
import tracking1160 from '../assets/image/services/tracking-1160.jpg'

export type Service = {
    title: string,
    img1x1: string,
    img316: string,
    img1160: string,
    path: string,
    description: string
}

export default [
    {
        title: 'Доставка цветов автотранспортом',
        img1x1: deliverTruck1x1,
        img316: deliverTruck316,
        img1160: deliverTruck1160,
        path: '/services/delivery-auto',
        description: 'Одним из главных преимуществ автомобильной перевозки цветов является ее гибкость. Автомобиль может маневрировать по маршрутам и доставлять цветы непосредственно …'
    },
    {
        title: 'Доставка цветов авиатранспортом',
        img1x1: deliverAir1x1,
        img316: deliverAir316,
        img1160: deliverAir1160,
        path: '/services/delivery-air',
        description: 'Максимально быстрая доставка растений. Чем меньше пройдет времени от срезки цветов до получения их потребителем, тем свежее и привлекательнее они будут выглядеть, дольше будут радовать своей красотой.'
    },
    {
        title: 'Таможенное оформление',
        img1x1: tamognia1x1,
        img316: tamognia316,
        img1160: tamognia1160,
        path: '/services/customs',
        description: 'В зависимости от страны происхождения цветы могут подлежать таможенному контролю. Таможенные органы регулируют ввоз растений, чтобы предотвратить распространение болезней, вредителей и поддерживать безопасность …'
    },
    {
        title: 'Прекулинг цветов',
        img1x1: precooling1x1,
        img316: precooling316,
        img1160: precooling1160,
        path: '/services/precooling',
        description: 'Прекулинг — это выдающаяся технология обработки цветочной продукции перед транспортировкой. Этот процесс преобразует обычные цветы в настоящие произведения искусства, сохраняя их свежесть …'
    },
    {
        title: 'Обработка груза, хранение цветов, доставка в регионы',
        img1x1: sklad1x1,
        img316: sklad316,
        img1160: sklad1160,
        path: '/services/cargohandling',
        description: 'Когда дело касается доставки цветов, каждый бутон имеет огромное значение. Обработка груза, правильное хранение и надежная доставка — все это играет важную роль …'
    },
    {
        title: 'Помощь в покупке цветов в Голландии, Эквадоре, Кении…',
        img1x1: help1x1,
        img316: help316,
        img1160: help1160,
        path: '/services/purchase-assistance',
        description: 'Эти страны славятся своими превосходными сортами цветов, которые завораживают своей неповторимой красотой и ароматом …'
    },
    {
        title: 'Отслеживание поставки',
        img1x1: tracking1x1,
        img316: tracking316,
        img1160: tracking1160,
        path: '/services/tracking',
        description: 'Вы всегда будете знать, где находится ваш заказ. Мы предоставляем информацию о местоположении и статусе доставки в режиме реального времени …'
    }
] as Service[]

