# Conexión Comunitaria - YAAJ México

### 📰 Guía para Editar Contenido del Sitio Web

> **¿Para quién es esta guía?**
> Para cualquier persona del equipo que necesite actualizar noticias o contenido del sitio, **sin importar si sabes o no de tecnología**. Si puedes usar Word o WhatsApp, puedes hacer esto. 🙌

---

## 📋 Tabla de Contenidos

1. [¿Cómo funciona todo esto?](#cómo-funciona-todo-esto)
2. [Entrar a GitHub](#entrar-a-github)
3. [Editar una noticia existente](#editar-una-noticia-existente)
4. [Crear una noticia nueva](#crear-una-noticia-nueva)
5. [El lenguaje Markdown: cómo darle formato al texto](#el-lenguaje-markdown)
6. [Guardar los cambios](#guardar-los-cambios)
7. [Preguntas frecuentes](#preguntas-frecuentes)

---

## ¿Cómo funciona todo esto?

El sitio web obtiene su contenido de archivos de texto especiales con terminación `.md` (de **Markdown**). Piensa en ellos como documentos de Word, pero más simples.

Cuando tú editas uno de esos archivos y guardas los cambios, el sitio web **se actualiza automáticamente** en unos minutos. No necesitas hacer nada más.

```text
Tu editas el archivo .md en GitHub → El sitio se actualiza solo ✅
```

Los archivos de noticias están en la carpeta:

```text
src/content/news/
```

---

## Entrar a GitHub

1. Abre tu navegador (Chrome, Edge, Safari, etc.)
2. Ve a: `https://github.com`
3. Inicia sesión con tu usuario y contraseña
   - Si no tienes cuenta, pídele al administrador que te invite al proyecto
4. Busca el repositorio del proyecto (el administrador te dará el enlace directo)

---

## Editar una noticia existente

1. Una vez dentro del repositorio, haz clic en la carpeta **`src`**
2. Luego en **`content`**
3. Luego en **`news`**
4. Verás una lista de archivos. Haz clic en el que quieras editar
5. Haz clic en el ícono de **lápiz** ✏️ que aparece arriba a la derecha del contenido del archivo
6. Realiza tus cambios
7. [Guarda los cambios](#guardar-los-cambios)

---

## Crear una noticia nueva

1. Ve a la carpeta `src/content/news/`
2. Haz clic en el botón **"Add file"** (arriba a la derecha) → luego **"Create new file"**
3. En el campo de nombre del archivo escribe algo como:

   ```text
   nombre-de-tu-noticia.md
   ```

   > ⚠️ **Importante al nombrar el archivo:**
   >
   > - Usa solo letras minúsculas
   > - Sustituye los espacios por guiones medios `-`
   > - No uses acentos, ñ, ni caracteres especiales
   > - Siempre termina con `.md`
   >
   > ✅ Bien: `inauguracion-nueva-sede.md`
   >
   > ❌ Mal: `Inauguración Nueva Sede.md`

4. Copia y pega esta plantilla como punto de partida:

```text
---
title: Escribe aquí el título de tu noticia
description: Un resumen breve de la noticia (1 o 2 oraciones)
date: May 21 2026 (la fecha de creación en formato MMMM DD AAAA)
pubDate: May 21 2026 (la fecha de publicación en formato MMMM DD AAAA)
---

Escribe aquí el contenido de tu noticia...
```

5. Llena los datos y escribe tu contenido
6. [Guarda los cambios](#guardar-los-cambios)

---

## El lenguaje Markdown

Markdown es una forma sencilla de darle formato al texto usando símbolos. A continuación te explicamos todo lo que necesitas saber.

---

### ✍️ Texto normal

Simplemente escribe. No necesitas hacer nada especial.

```text
Este es un párrafo normal. Puedes escribir todo lo que quieras aquí.

Este es otro párrafo. Para separar párrafos, deja una línea en blanco entre ellos.
```

> ⚠️ Si no dejas la línea en blanco, el texto se unirá en el mismo párrafo aunque en el editor se vea separado.

---

### 🔠 Títulos y subtítulos

Se crean poniendo uno o varios `#` al inicio de la línea, seguido de un espacio.

```text
# Título principal (muy grande)

## Subtítulo (grande)

### Sección (mediano)

#### Subsección (pequeño)
```

Así se ve:

| Lo que escribes | Lo que se ve          |
| --------------- | --------------------- |
| `# Hola`        | **Hola** (muy grande) |
| `## Hola`       | **Hola** (grande)     |
| `### Hola`      | **Hola** (mediano)    |

> 💡 En las noticias, el título principal ya viene del campo `titulo:` de arriba. Usa `##` para los subtítulos dentro del contenido.

---

### **Negrita** y _cursiva_

```text
Este texto es **negrita**.

Este texto es *cursiva*.

Este texto es ***negrita y cursiva***.
```

| Lo que escribes        | Lo que se ve         |
| ---------------------- | -------------------- |
| `**importante**`       | **importante**       |
| `*énfasis*`            | _énfasis_            |
| `***muy importante***` | **_muy importante_** |

> 💡 Usa dos asteriscos `**` para negrita y uno `*` para cursiva. Deben ir pegados al texto, sin espacios.

---

### 📋 Listas

**Lista con viñetas** (puntos):

```text
- Primer elemento
- Segundo elemento
- Tercer elemento
```

Se ve así:

- Primer elemento
- Segundo elemento
- Tercer elemento

**Lista numerada**:

```text
1. Primero haz esto
2. Luego haz esto
3. Finalmente haz esto
```

Se ve así:

1. Primero haz esto
2. Luego haz esto
3. Finalmente haz esto

> 💡 En las listas con viñetas puedes usar `-`, `*` o `+`, los tres funcionan igual.

---

### 🔗 Enlaces (links)

Para agregar un enlace a otra página:

```text
[Texto que verá el usuario](https://www.ejemplo.com)
```

Ejemplo:

```text
Visita [nuestra página oficial](https://www.mipagina.com) para más información.
```

Se ve así: Visita [nuestra página oficial](https://www.mipagina.com) para más información.

> ⚠️ El texto va entre corchetes `[ ]` y el enlace entre paréntesis `( )`. No dejes espacios entre los dos.

---

### 🖼️ Imágenes

Para insertar una imagen:

```text
![Descripción de la imagen](/imagenes/nombre-del-archivo.jpg)
```

La descripción entre corchetes es importante para accesibilidad (describe qué hay en la imagen). La imagen debe haber sido subida previamente a la carpeta de imágenes del proyecto. Si necesitas subir imágenes, pídele ayuda al administrador.

---

### 💬 Citas o destacados

Para resaltar una frase o cita importante:

```text
> Esta es una frase importante que quiero destacar.
```

Se ve así:

> Esta es una frase importante que quiero destacar.

---

### ➖ Línea separadora

Para crear una línea horizontal que separe secciones:

```text
---
```

---

### 📝 Ejemplo de noticia completa

Así se vería un archivo de noticia bien escrito:

```text
---
title: Inauguramos nuestra nueva sede en Guadalajara
description: Abrimos las puertas de nuestra nueva oficina con un evento especial para toda la comunidad.
date: May 21 2026 (la fecha de creación en formato MMMM DD AAAA)
pubDate: May 21 2026 (la fecha de publicación en formato MMMM DD AAAA)
---

El pasado viernes celebramos la inauguración de nuestra nueva sede ubicada en
el centro de Guadalajara. El evento contó con la presencia de más de 200 personas.

## ¿Qué se vivió en el evento?

Hubo música, comida y muchas sorpresas para los asistentes. Entre los momentos
más destacados estuvieron:

- Palabras de bienvenida por parte del director general
- Recorrido por las nuevas instalaciones
- Brindis de celebración

## ¿Qué sigue?

La sede abrirá al público de manera oficial el **lunes 29 de junio**. Para más
información, visita [nuestra página de contacto](https://www.mipagina.com/contacto).

> "Este es un paso enorme para nosotros y para la comunidad que servimos." — Director General
```

---

## Guardar los cambios

Una vez que termines de editar:

1. Baja hasta el final de la página
2. Verás una sección llamada **"Commit changes"**
3. En el primer campo escribe un mensaje breve que describa qué hiciste, por ejemplo:
   - `Agregué noticia de inauguración`
   - `Corregí el título de la noticia del 25 de junio`
4. Deja seleccionada la opción **"Commit directly to the main branch"**
5. Haz clic en el botón verde **"Commit changes"**

✅ ¡Listo! El sitio web se actualizará automáticamente en los próximos **2 a 5 minutos**.

---

## Preguntas frecuentes

**¿Puedo arruinar el sitio si me equivoco?**
No te preocupes. GitHub guarda un historial de todos los cambios. Si algo sale mal, el administrador puede revertir cualquier cambio fácilmente.

---

**¿Qué pasa si olvido poner el `---` al inicio y al final de los datos?**
El sitio podría no leer bien la noticia. Siempre asegúrate de que los datos del encabezado estén entre dos líneas de `---`.

---

**¿Puedo usar acentos y ñ en el contenido?**
¡Sí! Dentro del contenido de la noticia puedes escribir con toda normalidad en español. Los acentos y la `ñ` solo están prohibidos en el **nombre del archivo**.

---

**¿Cómo sé que el sitio ya se actualizó?**
Espera unos minutos y recarga la página del sitio web. Si ves tus cambios, ¡funcionó! Si después de 10 minutos no aparecen, avísale al administrador.

---

**¿Puedo previsualizar cómo se verá antes de guardar?**
Sí. En el editor de GitHub, haz clic en la pestaña **"Preview"** (junto a "Edit") para ver una vista previa aproximada de cómo quedará el formato.

---

> 📩 **¿Tienes dudas?** Escríbele al administrador del proyecto. ¡Ninguna pregunta es tonta!
