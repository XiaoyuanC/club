<template>
  <div class="manager-box">
    <div class="top">
      <div class="company">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTERQRERMWFhYWERYaExkZGRgaGRgYGRsfGhoaGRYbKysiGh0pJBYbJEEwKCwuMTExGSI3PDcwOyswMS4BCwsLDw4PHRERHTQoISUyMjA7LjIxOTIuMDk2MDI7OzsxLi4wMzEwMzkwMC4uMjA7NDowMC4wMjAuLjAwMDAwMP/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgYBBQcEAwj/xABGEAACAQMCAwcBBAUICAcAAAABAgMABBESIQUGMQcTIkFRYXEyFIGRoRUjQlKxFkNicpOywdEkJTRUdILh8TM1Y3OSlNL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACkRAQEAAgAGAAUEAwAAAAAAAAABAhEDEiExQVETFGGx4UKBwdEEcZH/2gAMAwEAAhEDEQA/AOxIgwNh0FZ0D0FE6D4FToIaB6CmgegqdKCGgegpoHoKnSghoHoKaB6Cp0oIaB6CmgegqdKCGgegpoHoKnSghoHoKaB6Cp0oIaB6CmgegqdKCGgegpoHoKnSghoHoKaB6Cp0oIaB6CmgegqdKCGgegpoHoKnSghoHoKaB6Cp0oIaB6CmgegqdKCGgegpU6UEE6D4FTqCdB8Cp0ClKUClK8DcZtxMLYzRCYjIi1rrI67JnPTeg99KUoFKUoFKV5OI8RhgQyzyJGgIy7sFUE7AZPnQeulfC1uUlRZI3V0YZVlIZWB8ww2Ir70ClKUClKUClaXmnmWCwh76cnc6Y0UZeRz0VF8z+QrZ2s2tEfSV1Kp0sMMuRnDDyIzQfelKUHiu+JwxFVkkVSwyoY4z+NeoGq9fcy8Pe5/R8kqGZvCUKsRqYfRrxpDnPTOa+/A7ho3NpKclBmJj+3H5f8y9DUW2Xr2q5jLjud53b2lYBrNWgpSlApSlBBOg+BU6gnQfAqdApSsZoK1z/wA0rw+1Mo0tK50QIehf1YDB0qNzv7edcy5NtI+JcWFyZjDJ3guHi0sxYoVzol6BM6fqGQDjfrXi7Wr64l4g/wBojeNEyturDYoDu6no2o4Jx/RB6VYuVOT+I2CwX1tGssskTrcQO4j0o5Vo/EdtQ0jPodh50HXazWv4FcTyQI91EsMpzrjV9YXcgeIdcjB++thQKUpQUOfn25eSWSz4e9xawSFJJdeh2ZdnMcZHiC4/7VQud+ek4mwhdTDAkqvBJgsw8Glu9jB8QOpiNJyMDZs10Htiup4+Gv3AwjOqzvnDLGxxgDz1MQp9ifu5byNyXJxIzBW0JHE3jPQysP1afHmfb5oO1chcEFnYwwCTvNmfXgqCXJfwqdwPF51YKqvKV7xQssV9axxokWDKsocu64A8A9dzVqoFYas0oKRLzVxWFj33CC6AnxQTK5xn9wjJ/KpRdqdhpbvjNBIv1RSxOHzjoMZH51da4H2zjHFpPeCE/kR/hQX7kXhbX0o41e4Z3yLOPqkEYJGR6ucdfv8APAv1VXsnfPCbX2Vx+EjCrVQKUpQcG51vbe34xLMkMzSRzq7ozqsTSABgw0gtp3DY23862l72k3Nw9uI7OPvS2qIRymSTPQgoo8APmG8vxrw9uHD+74kso6T26n/mQlG/LRVw7DoIjYtKsSLL3rpI4XDOAdSgt1IAbH3Vlks1W42y7i58DmmeCN7mNY5WXMiK2oKfTV57Y/69a2FKVrClKUClKUEE6D4FTqCdB8Cp0ETWgVHupZdUjpFHIUVUJVmYAFmZxvjJwAMdK35rSSWs0EryQKsiSNqdCdLB8AEox2wcDY+dc8529OnDut+/DR838LXuZLacmWJ4JWhLnU8UsaFwVc7kEZ6+mOhrPKN9Pc2djD3jKWskeaQHxsAdKqGPQnBJPXb3raXHCprgSNNoQmCWOBASwUyLpLO3meg26DNefgvLs1rbWioyNNBAI5Bk6JF6kA4yCCMg49fWp1ddO2/306bnNN63rv429N7ataATxySMisveo7FwVJCllLbqwzn0OKsC1opre4uNKSosUQZWcatTPpOQBjZVyBnzreiqwnW67OfEu5N906+UsgUFmIAAySTgADzJPSvpWv47weK7ha3nDGNyNQVmUnSQR4lIONq6Oakcy8XbjGrh3D0Lwd6n2q6OViUI4YrGT9beHy67eR1D2cEt1t+P3UMI0xy2EUroPpMgfRqA6AkfiSa3kvfW2iCxsY2hVBpxMsQB8xoKn23881oYrPiQ4m/EfsUeGtFh7v7QuQQ+rVq0/wCFBfqVorPiV80irJZIiE+JxcKxUeukLvW9oFKV57x3WNmiQO4U6VLaQx9NRzigzd3KRRvLIdKIjO5PkqjJP4CuK8xxrcxtxy+RxHM6xWcEZCs6Lq0vLIQdI+o7DP5VfOaRxO7s57VbKOMzRlNf2hTgHrtp32yPvqL2dy9olnNwqKSJI0XSblQPAAARhcqds7b0Gh5M5XiurVbrht1eWTB2Up3veRh165Q4Dqcg+XXpXQuXoLlIFS8kSWYFtToukMM+ElfXGM42r58r2fc26xC2S2ClsRo4kAGc6teBknrvvW3oFKUoKR2x2q/o5rkYEttLHLE+NwQ4BXPXBz+Q9K+XZyxS+4pAu0ffQzBf3JJ01yKPbOPwrc9oPAZL6xe1iZVZ5IiS2caVcMemd8Cs8s8utb3N9cO6t9pmRkAByqIukK2fP49KDeTzKil2ICgZJPQD3pBMrqHUgqRkEbgiocQtxJG8ZwdSkb9Khwu27qGOPbwoAcdM+ePbNTu7+itTl3529lKUqklKUoIJ0HwKnUE6D4FToFYrNKBSlKDFKzSgiKVmtZxTjsEDKsrhS3Qbnb1OOgqblMZutxxyyusZutpSoIwIBHQ9KnVMKUpQKUpQKUrwvxeBZhbtNGJmGVjLrrI9QnWg91KUoFKUoFKVXueOY2soYnjjEkk11FDGpJAJkJzuPZTQWGlKUClKUClKUEE6D4FTqCdB8Cp0ClKxQM1oea+cbXh/d/aXYGTOhVUs2FxqYgdAMj8aqnNPC72KO44jdcTeBomb7NHAT3WnOER42x3jtkdeh9R058ONycRuIY7/ALybVLpjMRSORe9YZRcjSyZA2bcb4YdKD9B2N4k0SSxMGSRAyMOhVhkGvRXj4XZRwRR28Q0pHGqouckKowMk7np1r2UEarnNPLC3B70MVdUIxthsZIHt1O/vVkrGKjPCZzVdOFxMuHlzY3Vavl3itvPEDbSK6oApAOShUY0sOoP8a5fBxG7teNvLeXgSDvpdeZgyNEdWhEhUkhh4dtIIKk/N147yEjzG6sJWsrrzeMfq3z17yL6W659z1zXGOcuEPa308EjmRgwYyEBS5kUSF8Dpux/Cqk1EW7u3ar7nzhzvHDFfoJHlRV7sGTJLAacgEAHp99WxarHZ1DBJw+2njhiR2hXWVRFOtfCxJA65U1aKaNs0pStY8HHOJpbW8tzJ9MUbOR5nSMgD3J2++uKcDkg4hxiO4eWSB5LiOTuihk1SIAdKTL0XwdWUYGRVy7duKslpFbKGxNLmRsHTpjwwUt0yWKnHoprmHL1hcYN5CJlWBwGliGp43YEhtHVlH7Xs2/Wg/SlM1z7lLm6TilnJEpCXUQTWVJVJFJ+pT+znSQR5fBq3ct2s0cCpM2WyfPVgeQ1edRzXm1r93TknJzbm9615balYrNW5qzzPBxQSiWwltzGEAaGZSNTZOSJF3yQQMbDaqHzbzozz2MV5avBNbX0cs6alZCmCA6ODv1z9x3NdirjPbhYiS+gEWGkNq5mGQNEaNlXdjhUXxPuSOnuKDsorNc85e5h4u8ULpa2txCdCGSK4GrAIVmOTjIwSQK6HQKUpQKUpQQToPgVOoJ0HwKnQRqtc13pjdCtw8JxtlNUJ3/nGx4fTrVlqE0SsCrAEHqCMg/Iqc8bZqL4WUxyls255x8pdYjvZ0cL4lSBGkVT01ufv/PyqvWnJdnG2trhXR/oVMu/XPhTGVO3mTjp5116z4fFGCI40QHrpUDPziowcMhRy6RIrHqQoB/EV5/g5+/u9fzPDn6e3+v6U3kvhsaXrzpKJWdCjGR5e/AGDp0OcYyBv7eVX2vOLCLvO97tdeMa9I1Y+eteg134eNxmrXl4uczy3JpKlKVbmVy7tf5biNxa3spfunmigudOAVRi2mQE+hbH4V1GqV2tKXt7aEAnveJ2qHAJ21Z39tqCHY++i1ms2GJLW8mjf+lk6ww9AdR/CrxVK7MoX18TldGTvOKTadQIyqhQCM9RuautApSlBTu1+RF4Rc6xknuxGOp7wuugj79/xrWdnFo1pxC74epPdi2t5tJ30SuoWTB6kHA6/uivT2lx3M7W0EVpNLHHdwSzuvdaXRDkoupgS3yAK81hcXScUuL48Ouu7mt4o1UdzqDIckkd5jH30F5t+Hwxu0kcSK7ga2VVDNjpqI3PWvVitHYcflkkVGsLmIMTl37nQuxOW0uT5Y2B61vaBWDWaUGvvOLwxHTI+k4z9LHb5Ax5VSUtIJuIcSkuvFBc28EUbeLJUDLqMDK7hT9wq7ce/2ab/ANl/7pr62A/VJ/UH8BUXm3qV1nJy7svrv+Gj5flsbKFbaBmVAWI1B2JLHLEkjc71vbW7SRQ6HIOd8EdPY14r8f6Xbf1Zv7oraUwttu2ZzGSal6/X8J0pSrcylKUEE6D4FTqCdB8Cp0ClKUClYJqg8t9py3XETZfZyis8ixPqyxMYJOtMeEEIfM42+4L/AEpSgUpUTQZpXhsL7VD3shCgByx6ABSRk/cK8HLnOFnfNIltLraPdgVZTpzgMAwGV9xWS76ts1dVvaV4o7omd4ttIiRh65ZnB+7wivaKS7NWM0pStYxSleeW7RSqs6qW+kEgE/A86b02S3s9NKUowrFZrBoPm8YIIIyCMEHoakowMCq5cc1iK5kimGEUqEIBJJIBwfxr0/ypi/cm/s2rn8XD27X/AB+JNdO/VuDGCQSBkZwfMZ64NfStH/KqL9yb+zavKObVklhWAZV30uWBGOn0npmnxcJ5b8vxPVWelYFZro4FKUoIJ0HwKnUE6D4FToFV3nLhF1dLFDBP3ETOftLLkSlB0WNh0zvn7uoyDYqUHAe0C5e2lfh0F7PPApRnWRgxSQEkIJPqOnY42AOPMVZew6dZpbh5FhaZFXEugd8wcnVqf9oeEb9STuTVP5m5d0XV+6M5t7e6jWd/rkVZvEz/ANMqdQ9d1z5musXnZ3YzrE8TSw6IEjR4JNBeMbqGODq9c+eaC30rSW9+sMsViqysViXS7ENlFGNTMTqJ238ya3YqZlLvXhuWNx1vyzXi4ujmJhHnVjbBwSM7gHyJGa9tK2zc0S6u3Pp+aLVOH3VxH+tt/DEIjJhyznRIPFlk2fOPYmqr2S8WtIr7u0jlDTKyCSWRMIoGsKAqrksVAyd+lWPtZ5Ss0tLm/WELPmLxgsBlpVUnRnTqIYjOPOud9nPDIbriMNvcIHjdZdS5I3WNmG64IIIBrMZqaMru7rrvB76Oe6kWFi8sM5Fw6sSgQ6tKdcH0wBsVb77cK1/AuCQWkQhtoxGgOcDJJJ82Y7k/NbGmOOlZ582maUrFUhFjgZO3rVJiaDieu9jeSOKKRo2ZlGmRY/EZIznZfERk+nSrldQLIjxt9Loyt8MMH+NcJ41zDd2H+qoZ0aK2lcB1UEyIwz3UoOxA1MCPU+1TljjlNVfDzywvNjdV1blTny0v5HhgLh0XUA66daZALL7ZI2ODuNqs9cz7EuF25hkvI4WSUsYtRk1rpGlmEY6qM6fqyfCNyK6ZVIKwazSgo/aRy87RLcWsJklju4ZpFDHU6RZOFB2z06b/AD0rW82cwjiXDD+jrgRSiVe+ieRYZcAHVHliMHVg9cHSRmuk1xzt54ZDHNbTJGqvKs3esBjXo0aS3kSNR361kknZtyt71ueV+ZRw7hqLfS99cNI/cwxuJpiCfCmVJ88nrgZAGdhW27POW2js4jdxlJhPLKq5OU7xtQDY2zjGx6VVuwTh0TNcztGpkjMaxsRkqGDatPpnArrtLJSZWXcpWaUrWFKUoIJ0HwKnUE6D4FToFUnjvEuIXU8ljYRm3RDpmu5FPmM4gX9o79fn6djV2rzX1qJY2jLOoZcFkYo491cbqfigpPNHLUVjwG9hi1MWiLyu5y8jkjLMfXarfy9/slv/AMPF/cFae75EglRo5bi8dGGGVrmUqw9CCd6+kXJcSgBbm9AUAKBdS4AHQAZ6bUEbn/zaL/hm/iasleM8NjMyzkHvFQqDk/SfbpXsFc8MbN78104mcyk14mkqUpXRzVntOmZOE3jJ9XcH8CQG/Imqvwa0jg4rwpYBgS8JIl91VdSt/WLHrVi4/wAI4lcwz2zSWgjlR0/8OXUFbYb6sZxWs4fydxCK4t7gTWrNb2Yt4wUlwUH7Rwfq2oL/AErV8HF2C32poCMDR3SupzvnVrJz5dK2lBivPffQ/wBX0N9H1dP2f6XpXopWVsulCj4xIqsqXoVR1E6Hv09gP2zVb4jylZSkASNE5yxMy92Xyclgw2OfcZ3611iaxjZg7IpYdCVBI+Cazc2aSDDorAeTAN/GvN8DL393t+Zwn6ft/TmFrwm1iVRDPJF4we8CvHAzqf3lIPkBk5zXTOGylokZmRiVBLJ9JPqvtX0e3QrpKqVxjBAxj0x0qcUSqAqgAAYAAwAPQCunD4eWN61x43GnEk1Nf8/iR9aUpXZ52l5wW4NlP9jfROIyYyACSV3KjORkgED3Nc/4JyHFxW0gvWv7l3dTrLlX0t0ZFB+kAg/O1dSvonaNljk7tyPC+kNpPrpOxqq8F5LuLXvBBxBlEszSuO4jK6266QT4Rt0FBVuPckR8JtJbuG+ullBVYhGVXW7HCoUA8Y3z7AGuj8tRzraQi6fXP3QMrYA8R3xgbZGce+K0PGOSri5aF578uYJRJEO4j0hx0JXOGx71Z+GQSJGFll718nL6VTO+w0rsMdKD10pSgUpSggnQfAqdQToPgVOgUpSgUrmnafz5eWN3FDbxpoMSvl0Zu+YsQUQgjGMDpk5ce2ei28hZFZl0kqCVPVSRkg/HSg+tZrU8I4oZGdHAVld9OOjIHZQR75XB/wCtbWsllm43LG43VZpSlawpSvBx3ia21vNcMCwiieQqOpCjOB+FB76VS+zvnz9JNMjw908QVtm1KysSBuQMEFTV0oFKUoFKqXaVzXJw+2SWKMOzyhAWzoXwlstjBP04G43r3ci8fa+so7l4+7ZiwIGdJKsV1Ln9k4oN/SlKBSlRJoME15bG/SYMYzkKxXODgkdcHzHuK08l39tdoYnAijIEzAjU2eiDzCnHXz8qqnO/PF1YX8VnbQp3QSMqpRi02o4KoQRjHTbJz1qZbb07OmWExnXv69OoUqK9B5bVKqcylKUClKUEE6D4FTqCdB8Cp0CtJzjy+t9avb6ijbNG4z4JF+kkDqPIj0NbulB+aeJcRvYJngknuI3hbSyd9I2lgBkqxPQ9R7MK6Xynw3jE9lbzR8UVEeIFVeBZHA9GkY5c+5qn9o3Apn4nxB49LCKFbiTBPhj0qmk7fXsWx6b58q632fwaOGWa6lb/AEaM5UkghhqGCcetBrOSLadXxcTLMy9+dSxiPSGkAwQOuWjdvbOKuQrX8J4YIe8OdTSSMxPsSSFHsM/ma2FRhLJ1dOJZcunYrzX113aF9DPjHhQZY5ONhXprzXdoHKEsw0OGGk4zjyb1G9Vd66Imt9VY5k5amvrgGW7aKzjTKpCxR2l3BZ5Nxha43x/jszyhEu5p4rd3W2kcgMUOxYkfVnGN85X2OK/QF9weFrWW3wY4nRw2glSA2SxDeVcO5N5fRrjh81zvbXE8ixkdGkjYqsb+gZlHTORt60n1LrfR03sbdH4f3qpAjmV1k7pAhJXAXvAOr4IO2BhhtV5qqS9ntobk3SNPE5lEjLHKyRs4IOSg9cb/AH1a61hWDWa8vErcyQyRqxjLxsocDJUsCNQHmRnNB+fudOZpZ+IXE0UjBNfdxgbqY4/CMocqwJBbcH6q7B2ccwR3NnGneK08aBbhAojZHyRgxjGBtjIGDg/FcZflowTTC4DNb2tysd08WNaI/wBEgU+RGD546VeL7lfiFu6XcV3DKoKsLhkKy6dgve6c96hGASTnHwMZbqbbjN3TrNKih2rNaxg1pOIJJcSNCA0cS4Ej9C+d9CH93fc/dW6NZxWZTasMuW78qZzByUyy/beFuLe6VQGX+anUdFlX12xn/HBHMOe+L8RW7dLuUxyYRhHE792gZdghzkHA3365r9B1x7td5blm4nbtHpAuYhGhYkDvI9TENgHGQVx6mtZbvu2fJfK9xd2MFx+lb1A6HwK4wulihAZsk/T510uKPSoGScADJ6nHmfeqf2Ln/VEG+f1k+3mv659j7/51dKMKUpQKUpQQToPgVOoJ0HwKnQKg8gHUgfJxU613F+BW1zpFzBFKEzp7xA2nPXGemcD8KDn3FLlYL3j5yP1nDIpF6HJEbJt67tVv7PdKcMskLAH7JESMjYsoJH51P+QnDP8Acbb+yT/Kg5F4Z1+w239kn+VBYKVgCs0CoOcAn0HlU6UHPXiv+MEh1ksbDVup8NzOB5MP5tT6f3s7Y594fHAODQQqEjj4rbqijyG/mep88+ZNXPjHCluECNJMgDZzFLJEx2IwWQgkb9K0lx2fW0hQyy3blHDx67udtDjoy5bwsPUUFrpVb/kTF/vN/wD/AHbn/wDVb+GPSoUEnAAySSTjbJJ3JoPrWCazWu4xwvv1CGWaLByTE+gnIxgnG4oObWQMvBuNXzbm6luSp/8ATj8CD7sNXQuX4Vewt0YZVrSIEeoMYBrUR9nVusBtVnuhAQwMYl8BDHLArjzJNeqHk5UUIl5eqqqFUCbYADAA2oS6ffgN6Iw1tKwDxMFUsQNSn6CM9Tjb7q28c6sWCsCVOGAOcH0Poa+LcPiJVnRXZQAGYAtt03Pn519Y4FUsVUAscsQANR9T6mpxlnReeWOV3O771msCs1SCqJ2jThr7hUPTTcS3DkdVSCMsd/Q5P4VceIWnextHrkTV+1G2lxvnZvKq5ddn0Er95JcXbuI2jDGbJ7t/qXOOhoPh2Nxn9GLKwx3888qr5KrSEAD28Ofvq6VWLPklIo1iiu7xERQEVZsKoHkBit5w207qNY9byac+ORtTnJzu3n1x91B66UpQKUpQQToPgVOoJ0HwKnQKUpQKUpQKUpQKUpQKVqm4wRK8fcyYUgattJ6bjPz+Rr6pxI6C5jkGAu2MsS2BjSPME70GwpXgbiijHgl3bA/Vv7ZPToM/kan9vGnOiX6sY0Nnz3xjptQeyleOS9wzr3ch0qCCFyGz5KehIr5HiZ8P6mbxD9zp16jPt+YoNjStYeLnr9nn/wDh/hmpvxIjP6mY49F/hvQe+s184pNQBIK58j1r6UClKUClKUClKUClKUClKUH/2Q==" />
        <span v-text="'System administrator background management'"></span>
      </div>
      <blank :Height="1" :padding="0"></blank>
      <tabs :tabs="tabs" @change="change" :Left="10"></tabs>
    </div>
    <div class="body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import blank from "../../components/blank.vue";
import Tabs from "../../components/tabs.vue";
export default {
  name: "manager",
  components: { blank, Tabs },
  data() {
    return {
      clubList: [],
      tabs: [
        {
          label: "Club Management",
          path: "/admin/club",
          show: false,
        },
        {
          label: "Activity Management",
          path: "/admin/act",
          show: false,
        },
        {
          label: "Change Password",
          path: "/admin/password",
          show: false,
        },
        {
          label: "Logout",
          path: "/admin/logout",
          show: false,
        },
      ],
    };
  },
  created() {
    //Get current route
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].path === this.$route.path) {
        this.tabs[i].show = true;
        continue;
      }
      this.tabs[i].show = false;
    }
    // this.init();
  },
  methods: {
    init() {
      this.getClub();
    },
    getClub() {
      const loading = this.$loading({
        text: "Data loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.get({
        url: "/api/manager/club",
      }).then((result) => {
        console.log(result);
        this.clubList = result.data;
        if (this.clubList.length > 0) {
          this.club = this.clubList[0].key;
        }
        loading.close();
      });
    },
    change(index) {
      if (this.tabs[index].label === "Logout") {
        this.$confirm("Confirm to log out?", "Message", {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          type: "warning",
        })
          .then(() => {
            //send request，
            this.get({
              url: "/api/user/logout",
            }).then((result) => {
              //Login page
              this.$router.replace("/login");
            });
          })
          .catch(() => {});
        return;
      }
      for (let i = 0; i < this.tabs.length; i++) {
        if (index == i) {
          this.tabs[i].show = true;
          continue;
        }
        this.tabs[i].show = false;
      }
      this.$router.replace(this.tabs[index].path);
    },
  },
};
</script>
<style scoped>
.manager-box {
  box-sizing: border-box;
}
.top {
  position: fixed;
  width: 100%;
  height: 120px;
  background-image: -moz-linear-gradient(top, #0c7bb3, #f2bae8); /* Firefox */
  background-image: -webkit-gradient(
    linear,
    0% 0%,
    100% 100%,
    color-stop(0, #0c7bb3),
    color-stop(1, #f2bae8)
  ); /* Saf4+, Chrome */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0C7BB3', endColorstr='#F2BAE8', GradientType='0'); /* IE*/
  z-index: 99;
  padding-right: 200px;
  padding-left: 200px;
  box-sizing: border-box;
}
.body {
  position: relative;
  padding-top: 125px;
  padding-bottom: 85px;
  padding-right: 200px;
  padding-left: 200px;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-image: -moz-linear-gradient(top, #ead6ee, #a0f1ea); /* Firefox */
  background-image: -webkit-gradient(
    linear,
    0% 0%,
    100% 100%,
    color-stop(0, #ead6ee),
    color-stop(1, #a0f1ea)
  ); /* Saf4+, Chrome */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EAD6EE', endColorstr='#A0F1EA', GradientType='0'); /* IE*/
  z-index: 99;
  padding-right: 200px;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.bottom > h4 > div {
  color: #0c7bb3;
  margin-right: 10px;
  cursor: pointer;
}
.link {
  display: flex;
}
.company {
  padding: 10px 0px;
  display: flex;
  align-items: center;
}
.company > img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.company > span {
  font-size: 20px;
  padding: 0px 10px;
}
</style>