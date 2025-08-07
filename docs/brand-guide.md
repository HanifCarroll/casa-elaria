# Casa Elaria: Comprehensive Brand & Implementation Guide

This document provides a unified overview of the Casa Elaria brand, target audience, product details, and marketing strategy. It is intended to be used by an AI developer, in conjunction with `tasks/tasks-prd.md`, to build the "fake-door" e-commerce website.

## 1. Core Brand Identity

- **Purpose**: To revalue natural resources by creating conscious, sophisticated, and sustainable personal care experiences derived from the olive industry. The brand emphasizes upcycling waste from olive oil production (pits, non-extra-virgin oils) into high-quality cosmetics.
- **Mission**: To be Argentina's leading circular, triple-impact cosmetics brand, offering high-quality products derived from olives.
- **Vision**: To become a regional benchmark for conscious well-being, combining innovation, aesthetics, and sustainability.
- **Brand Story (Naming)**:
    - **"Casa"**: Represents home, belonging, origin, and intimacy—a place to return to.
    - **"Elaria"**: A soft, elegant, feminine word derived from *elaia* (olive), signifying something new and refined.
- **Tagline**: "Regalá consciencia, belleza y cuidado." (Gift consciousness, beauty, and care.)
- **Core Values**:
    - Connection with nature
    - Sophistication
    - Conscious and ethical production (triple-impact)
    - Local identity with global projection
- **Colors**:
    - Verde Oliva - #32470D
    - Amarillo Yema - #ECC957
    - Blanco Clara - #FFFFE6
    - Negro - #141402
    - Verde Hoja - #32470D

## 2. Target Audience & Positioning

- **Primary Demographic**: Women aged 25-55, primarily urban, conscious consumers interested in personal well-being, natural cosmetics, and design. They are socially active and enjoy sharing quality products.
- **Ideal Buyer Profile**:
    - Values artisanal, natural, and well-designed products.
    - Seeks products with purpose and a compelling story.
    - Has an active social life and enjoys gifting beautiful, ethical products.
- **Key Purchase Drivers (for L'Occitane consumers)**:
    - Willingness to pay a premium for quality (e.g., shower oils).
    - Interest in 100% Argentinian brands.
    - Scrutinize labels for natural ingredients.
    - High appreciation for shower oils.
    - Views the brand as ideal for gifting.
- **Positioning**: Casa Elaria resolves the tension between the ethical and the beautiful. It offers a complete sensory experience that many conscious brands lack, and a purpose-driven story that many aesthetic-focused brands are missing. It is positioned as a local, accessible alternative to premium imported brands like L'Occitane and Ortigia Sicilia.
- **Origin Story**: Products are from San Juan, Argentina, an emerging and important region for olive production, akin to Provence for lavender. This is a point of pride and distinction, not just a "100% Argentinian" label.

## 3. Products

The initial launch will feature three core products:

1.  **Jabón Líquido (Liquid Soap)**
2.  **Shower Oil**
3.  **Jabón en Barra (Bar Soap)**

**Key Benefits of Olive Oil in Cosmetics**:
- **Hydration**: Moisturizes, softens, and plumps the skin. Suitable for sensitive skin.
- **Protection**: Helps protect against UV rays and free radical damage.
- **Anti-Aging**: Reduces the appearance of fine lines and wrinkles.
- **Other Benefits**: Gentle exfoliation, reduces inflammation, calms irritation, aids tissue healing, and diminishes spots.

## 4. Website Implementation Details

### Visual & Design Direction

- **Look & Feel**: Premium, botanical, warm, sophisticated, and elegant. It should feel like a boutique brand. The aesthetic should be inspired by nature but remain clean and modern.
- **Inspiration (Love)**:
    - `https://www.lotodelsur.com/cl/es/`
    - `https://ar.loccitane.com/`
    - `https://www.ortigiasicilia.com/`
- **Inspiration (Avoid)**:
    - `http://www.ruhnatural.com/`
    - `https://thecandleshop.com.ar/`
- **Palette**: Grounded in olive-green accents, with potential for gold and other natural tones. (Refer to brand assets for the final palette).
- **Typography**: Elegant serif for headings, clean sans-serif for body text.
- **Imagery**: Use supplied product and brand photos. The aesthetic should be clean, focusing on product texture, ingredients, and the sensory experience.

### Page Content & Copy

- **Quiénes Somos (About Us)**:
    > "En Casa Elaria creamos productos que cuidan la piel y al mismo tiempo promueven un consumo consciente, combinando belleza, bienestar y responsabilidad. Nuestra propuesta nace del deseo de ofrecer una experiencia sensorial basada en los principios del triple impacto y la economía circular. Usamos como base el poder nutritivo de la oliva sanjuanina, reutilizando con respeto lo que la naturaleza nos brinda. Cada fórmula está pensada para personas que valoran la trazabilidad, la calidad natural y el origen argentino de lo que eligen. 100% natural, 100% argentino, 100% con propósito. Porque creemos que regalar bienestar es una de las formas más hermosas de cuidar a quienes más querés. Y también, al planeta."
- **Product Descriptions**: Emphasize the sensorial experience. Initial copy can be found at `https://casaelaria2.mitiendanube.com/`.
- **Gifting Message**:
    > "Regalá consciencia, belleza y cuidado. Porque creemos que regalar bienestar es una de las formas más hermosas de cuidar a quienes más querés. Y también, al planeta."

### Fake-Door Checkout Flow

- **Trigger**: User clicks the "Comprar" button on any product.
- **Action**: A modal (pop-up) appears.
- **Modal Copy**:
    > "Muchas gracias por confiar en nosotros. Este producto pronto estará disponible. Dejanos tu e-mail para contarte cuando esté disponible."
- **Fields**: Email (required).
- **Confirmation (UI Only)**: Upon form submission, a success toast appears, and the modal closes. No backend action is required for the initial UI-only phase.

## 5. Marketing & Test Strategy

- **Objective**: Validate demand through a "fake-door" test before a full launch.
- **Platform**: A custom-coded static site (Next.js) is preferred for speed and simplicity during the test phase.
- **Test Duration**: 20 days.
- **Ad Budget**: ARS $5,000 per day.
- **Geographic Targeting**: Buenos Aires only.
- **Success Metrics (for a future phase)**:
    - **Email Capture Rate**: ≥ 1% of unique visitors.
    - **Cost Per Lead**: Must align with margin targets.
    - **Conversion Rate (benchmark)**: 0.5% - 1.5% is a reasonable target for a new e-commerce site in this sector.
- **Simulated Payment Methods**: The site should give the impression that it accepts bank transfer, credit card, and Mercado Pago.
